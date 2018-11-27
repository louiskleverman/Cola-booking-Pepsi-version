var Booking = artifacts.require("./Booking.sol");
var Coke = "0xCe5909535deb3b5ffFcB0d320f03D9542eDA5911";
var Pepsi = "0x10D19Ff8d50c763642b9377Affcb820b274aa5B8";

module.exports = function(deployer) {
  deployer.deploy(Booking,Coke,Pepsi);
};
