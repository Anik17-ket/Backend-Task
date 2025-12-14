import Donor from '../models/Donor.js';

 export const registerDonor = async (req, res) => {
  try {
    const { fullName, bloodGroup, age, city, contactNumber, lastDonationDate } = req.body;

    const existingDonor = await Donor.findOne({ contactNumber });
    if (existingDonor) {
      return res.status(409).json({
        message: 'Donor with this contact number already exists'
      });
    }

    const donor = await Donor.create({
      fullName,
      bloodGroup: bloodGroup.toUpperCase(),
      age,
      city,
      contactNumber,
      lastDonationDate: new Date(lastDonationDate)
    });

    res.status(201).json({
      success: true,
      message: 'Donor registered successfully',
      data: donor
    });
  } catch (error) {
    console.error('Error registering donor:', error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const getAllDonors = async (req, res) => {
  try {
    const { bloodGroup, city } = req.query;

    const query = {};

    if (bloodGroup) {
      query.bloodGroup = bloodGroup.toUpperCase();
    }

    if (city) {
      query.city = { $regex: city, $options: 'i' };
    }

    const donors = await Donor.find(query);

    res.status(200).json({
      success: true,
      message: 'Donors fetched successfully',
      data: donors
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};



