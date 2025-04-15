export const setAuthCookies = (res, accessToken, refreshToken) => {
  res.cookie('access_token', accessToken, {
    httpOnly: true,  // Ngăn chặn client-side JavaScript truy cập vào cookie
    secure: process.env.NODE_ENV === "production",  // Chỉ bật khi dùng HTTPS
    sameSite: 'Lax',  // Dễ chịu hơn khi làm việc với các yêu cầu cross-site
    maxAge: 60 * 60 * 1000  // Cookie hết hạn sau 1 giờ
  });

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,  // Ngăn chặn client-side JavaScript truy cập vào cookie
    secure: process.env.NODE_ENV === "production",  // Bật chỉ khi dùng HTTPS
    sameSite: "Strict",  // Cấu hình nghiêm ngặt cho cookie refresh
    maxAge: 7 * 24 * 60 * 60 * 1000,  // Cookie refresh hết hạn sau 7 ngày
  });
};
