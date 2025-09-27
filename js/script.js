// 1) Vendos vitin aktual në footer
document.getElementById("year").textContent = new Date().getFullYear();

// 2) Event për butonin CTA në index (nëse ekziston në faqe)
const cta = document.getElementById("cta-btn");
if (cta) {
  cta.addEventListener("click", () => {
    alert("Faleminderit për interesin! Mund të më kontaktosh në LinkedIn ose Email.");
  });
}
