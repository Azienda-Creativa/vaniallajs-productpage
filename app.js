const productImg = document.getElementById("productImg")
const btn = document.getElementsByClassName("btn")

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    switch (i) {
      case 0:
        productImg.src = "/432 product-img/image1.png"
        break
      case 1:
        productImg.src = "/432 product-img/image2.png"
        break
      case 2:
        productImg.src = "/432 product-img/image3.png"
        break
    }

    for (let bt of btn) {
      bt.classList.remove("default")
    }

    this.classList.add("default")
  }
}
