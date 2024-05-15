const homePage = async (req, res) => {
  try {
    res.status(200).send(`
        
    <body style="background-color:black; display: flex; justify-content: center; align-items: center; height: 80vh; margin: 0; font-family: Arial, sans-serif;">
    <div style="background-color: green; color: #ffffff; padding: 30px; border-radius: 10px; max-width: 600px; text-align: center; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
        <h1 style="font-size: 36px; margin-bottom: 20px;">Welcome To Hall Booking API!!!</h1>
        <div style="margin-bottom: 30px;">
            <p style="font-size: 18px; margin-bottom: 20px;">Choose your right choice of stay with us..</p>
            <p style="font-size: 18px;">24/7 Customer Service. Better Amenities. Holiday Discount 50%!!.</p>
        </div>
        <button style="background-color: #ffffff; color: #2980b9; border: none; border-radius: 5px; padding: 10px 20px; font-size: 16px; cursor: pointer; transition: background-color 0.3s ease;">Book Your Hall Now</button>
    </div>
   </body>
`);
  } catch (error) {
    res.status(500).send({
      comment: "Internal Server Error",
    });
  }
};

export default {
  homePage,
};
