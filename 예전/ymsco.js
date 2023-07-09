export default async function handler(req, res) {
  if (!req.headers["user-agent"].includes("SniperFactoryBrowser")) return res.status(400).json({ error: "SniperFactoryBrowser 브라우저에서만 요청을 받습니다." });
  if (!req.headers["authorization"]) return res.status(400).json({ error: "JWT 토큰이 없습니다." });
  if (req.method !== "POST") return res.status(400).json({ error: "POST 요청만 받습니다." });
  return res.status(200).json({ result: "정답코드는 ????? 입니다. 과제 제출란에 전달해주세요." });
}
