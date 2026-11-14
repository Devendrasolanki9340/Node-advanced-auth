
import QRCode from "qrcode"

const otpAuthUrl = process.argv[2];

if (!otpAuthUrl) {
  throw new Error("Pass otpAuthurl as argument");
}

async function main() {
  const terminalQr = await QRCode.toString(otpAuthUrl, { type: "terminal" });
  console.log(terminalQr);

  await QRCode.toFile("totp.png", otpAuthUrl);
  console.log("Saved QR code to totp.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
