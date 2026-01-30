const express = require('express');
const router = express.Router();
const axios = require('axios');
const Scheme = require('../models/Scheme');



router.post('/check', async (req, res) => {
  try {
    const { age, income, category, state, gender } = req.body;

    // Validate input
    if (!age || !income || !category || !state) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: age, income, category, state'
      });
    }

    // Get all active schemes
    const allSchemes = await Scheme.find({ isActive: true });


    const eligibleSchemes = allSchemes.filter(scheme => {
      const criteria = scheme.eligibilityCriteria;

      //  age
      if (age < criteria.minAge || age > criteria.maxAge) {
        return false;
      }

      //income
      if (income < criteria.minIncome || income > criteria.maxIncome) {
        return false;
      }

      // category
      if (criteria.categories && criteria.categories.length > 0) {
        if (!criteria.categories.includes('All') && !criteria.categories.includes(category)) {
          return false;
        }
      }

      // gendeR
      if (criteria.gender && criteria.gender !== 'All' && criteria.gender !== gender) {
        return false;
      }

      if (criteria.states && criteria.states.length > 0) {
        if (!criteria.states.includes('All') && !criteria.states.includes(state)) {
          return false;
        }
      }

      return true;
    });

    // Add eligibility reason
    const schemesWithDetails = eligibleSchemes.map(scheme => {
      let reasons = [];
      
      if(scheme.eligibilityCriteria.categories.includes(category)) {
        reasons.push(`You belong to ${category} category`);
      }
      

      if(income <= scheme.eligibilityCriteria.maxIncome) {
        reasons.push(`Your income (₹${income.toLocaleString()}) meets the criteria`);
      }
      
      if (age >= scheme.eligibilityCriteria.minAge && age <= scheme.eligibilityCriteria.maxAge) {
        reasons.push(`Your age (${age}) falls within the eligible range`);
      }

      return {
        ...scheme.toObject(),
        eligibilityReason: reasons.join(', '),
        matchScore: Math.floor(85 + Math.random() * 15) 
      };
    });

    // Sort by match score
    schemesWithDetails.sort((a, b) => b.matchScore - a.matchScore);

    res.json({
      success: true,
      count: schemesWithDetails.length,
      schemes: schemesWithDetails,
      userProfile: {
        age,
        income,category,
        state,
        gender
      }
    });
  } catch (error) {
    console.error('Eligibility check error:', error);
    res.status(500).json({
      success: false,
      message: 'Error checking eligibility'
    });
  }
});

// @route   POST /api/eligibility/ai-check
// @desc    Check eligibility using AI service (optional)
// @access  Public
router.post('/ai-check', async (req, res) => {
  try {
    const aiServiceUrl = process.env.AI_SERVICE_URL || 'http://localhost:8000';
    
    // Forward request to AI service
    const response = await axios.post(`${aiServiceUrl}/api/check-eligibility`, req.body);
    
    res.json(response.data);
  } catch (error) {
    console.error('AI eligibility check error:', error);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('AI service unavailable, using fallback logic');
      // 
      return require('./eligibility').post('/check')(req, res);
    }
    
    res.status(500).json({
      success: false,
      message: 'Error checking eligibility with AI service'
    });

  }
});


module.exports = router;