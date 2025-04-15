import crypto from "crypto";

export const hashOTP = (otp) => {
  return crypto.createHash("sha256").update(otp).digest("hex");
};

export const verifyOTP = (otp, hash) => {
  return hashOTP(otp) === hash;
};


