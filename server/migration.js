async function updateDonors() {
    try {
      await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
  
      const result = await Donor.updateMany(
        { verificationStatus: { $exists: false } },
        { $set: { verificationStatus: 'done' } }
      );
  
      console.log('Update operation result:', result);
      console.log(`Matched ${result.matchedCount} documents`);
      console.log(`Modified ${result.modifiedCount} documents`);
  
      await mongoose.disconnect();
      console.log('Disconnected from MongoDB');
    } catch (err) {
      console.error('Error updating documents:', err);
    }
  }
  