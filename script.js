function calculateDegree() {
    const chemAnalytique = parseFloat(document.getElementById("chemAnalytique").value);
    const chemTherapeutique = parseFloat(document.getElementById("chemTherapeutique").value);
    const pharmacologie = parseFloat(document.getElementById("pharmacologie").value);
    const pharmacieGalenique = parseFloat(document.getElementById("pharmacieGalenique").value);
    const pharmacognosie = parseFloat(document.getElementById("pharmacognosie").value);
    const semiologie = parseFloat(document.getElementById("semiologie").value);
  
    const totalPoints = (chemAnalytique + chemTherapeutique + pharmacologie + pharmacieGalenique + pharmacognosie + semiologie) * 2;
    const finalDegree = totalPoints / 12;
  
    document.getElementById("result").textContent = `Your final degree is: ${finalDegree.toFixed(2)}`;
  }
