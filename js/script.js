// Vendos vitin aktual në footer
document.getElementById("year").textContent = new Date().getFullYear();

// Event për butonin CTA në index
const cta = document.getElementById("cta-btn");
if (cta) {
  cta.addEventListener("click", () => {
    alert("Faleminderit për interesin! Mund të më kontaktosh në LinkedIn ose Email.");
  });
}
