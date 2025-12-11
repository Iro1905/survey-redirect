// 1. Kullanıcıyı yönlendireceğimiz anket linklerini tanımlıyoruz
const surveys = [
  "https://forms.gle/cXthdoB5L96wcLT46",
  "https://forms.gle/KMxQD2spJHhom5s2A",
  "https://forms.gle/LegKwjHU6jgXRKxr6",
  "https://forms.gle/mWsPyAzvZWa2TnY26",
  "https://forms.gle/PsaqKt2S38dW4UrJA",
  "https://forms.gle/K7tV84JnY6ZYJmTq6"
];

// 2. Round-robin için sayaç değişkeni (global scope)
let counter = 0;

// 3. Handler fonksiyonunu tanımlıyoruz
export default function handler(req, res) {
  // 4. Hangi ankete yönlendireceğimizi seçiyoruz
  const redirectUrl = surveys[counter % surveys.length];

  // 5. Sayaç bir artırılıyor
  counter++;

  // 6. Kullanıcıyı seçilen ankete yönlendiriyoruz
  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
