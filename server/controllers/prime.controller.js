const primeService = require("../services/prime.service");

exports.getMedianPrimes = async (req, res) => {
  try {
    const { n } = req.body;
    if (!n) {
      return res.status(422).json({
        success: false,
        message: "Missing body data",
      });
    }

    const primeNumbers = await primeService.getPrimes(n);

    const primeMedians = await primeService.primeMedians(primeNumbers);
    return res.status(200).json({
      success: true,
      primeNumbers,
      primeMedians,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send();
  }
};
