let btn = document.querySelector('.navegation .a')
const nav = document.querySelector('.navegation')
const topNav = nav.offsetTop

window.onscroll = function() {
  fixaTop()
}

function fixaTop() {
  if (window.pageYOffset >= topNav) {
    nav.classList.add('fixa')
    nav.style.background = 'white'
    nav.style.marginTop = '-1px'
  } else {
    nav.classList.remove('fixa')
    nav.style.background = ''
    nav.style.marginTop = ''
  }
}

let c = (el) => document.querySelector(el)
let cs = (el)=> document.querySelectorAll(el)


window.onload = function() {
  if (btn.classList.contains('active')) {
    itemPromo.map((item, index) => {
      let promo = document.querySelector('.models .item-content').cloneNode(true)
      
      promo.querySelector('.item-name').innerHTML = item.name
      promo.querySelector('.desc').innerHTML = item.desc
      promo.querySelector('.item-price').innerHTML = item.price
      promo.querySelector('.item-img img').src = item.img
     
      promo.style.opacity = 0
      c('.area').append(promo)
      setTimeout(() => {
        promo.style.opacity = 1
      }, 200)

    })
  }
}


document.querySelectorAll('.navegation a').forEach((item, index) => {

  item.addEventListener('click', (e) => {
    e.preventDefault()


    switch (index) {
      case 0:
        c('.area').innerHTML = ''
        c('.area').style.display = ''
        c('.area').style.flexDirection = ''
        c('.ent').classList.remove('active')
        c('.c').classList.remove('active')
        c('.d').classList.remove('active')
        c('.e').classList.remove('active')
        c('.f').classList.remove('active')
        c('.g').classList.remove('active')
        c('.h').classList.remove('active')
        c('.i').classList.remove('active')
        c('.j').classList.remove('active')
        c('.k').classList.remove('active')
        c('.yaki').classList.remove('active')
        c('.sobre').classList.remove('active')
        c('.l').classList.remove('active')
        item.classList.add('active')

        itemPromo.map((item, index) => {
          let promo = document.querySelector('.models .item-content').cloneNode(true)

          promo.querySelector('.item-name').innerHTML = item.name
          promo.querySelector('.desc').innerHTML = item.desc
          promo.querySelector('.item-img img').src = item.img
          promo.querySelector('.item-price').innerHTML = item.price

          promo.style.opacity = 0
          c('.area').append(promo)
          setTimeout(() => {
            promo.style.opacity = 1
          }, 100)

        })
        break;
      case 1:

        c('.area').innerHTML = ''
        c('.area').style.display = ''
        c('.area').style.flexDirection = ''
        c('.a').classList.remove('active')
        c('.c').classList.remove('active')
        c('.d').classList.remove('active')
        c('.e').classList.remove('active')
        c('.f').classList.remove('active')
        c('.g').classList.remove('active')
        c('.h').classList.remove('active')
        c('.i').classList.remove('active')
        c('.j').classList.remove('active')
        c('.k').classList.remove('active')
        c('.yaki').classList.remove('active')
        c('.sobre').classList.remove('active')
        c('.l').classList.remove('active')
        item.classList.add('active')

        entriesItem.map((item, index) => {
          let entri = document.querySelector('.models .item-content').cloneNode(true)

          entri.querySelector('.item-name').innerHTML = item.nome
          entri.querySelector('.desc').innerHTML = item.desc
          entri.querySelector('.item-img img').src = item.img
          entri.querySelector('.item-price').innerHTML = item.price

          entri.style.opacity = 0
          c('.area').append(entri)
          setTimeout(() => {
            entri.style.opacity = 1
          }, 100)

        })
        break;
      case 2:

        c('.area').innerHTML = ''
        c('.area').style.display = ''
        c('.area').style.flexDirection = ''
        c('.ent').classList.remove('active')
        c('.a').classList.remove('active')
        c('.d').classList.remove('active')
        c('.e').classList.remove('active')
        c('.f').classList.remove('active')
        c('.g').classList.remove('active')
        c('.h').classList.remove('active')
        c('.i').classList.remove('active')
        c('.j').classList.remove('active')
        c('.k').classList.remove('active')
        c('.yaki').classList.remove('active')
        c('.sobre').classList.remove('active')
        c('.l').classList.remove('active')
        item.classList.add('active')

        hossomakiJson.map((item, index) => {
          let hossoItem = c('.models .item-content').cloneNode(true)

          hossoItem.querySelector('.item-name').innerHTML = item.nome
          hossoItem.querySelector('.desc').innerHTML = item.desc
          hossoItem.querySelector('.item-price').innerHTML = item.price
          hossoItem.querySelector('.item-img img').src = item.img

          hossoItem.style.opacity = 0
          c('.area').append(hossoItem)
          setTimeout(() => {
            hossoItem.style.opacity = 1
          }, 100)
        })
        break;
      case 3:

        c('.area').innerHTML = ''
        c('.area').style.display = ''
        c('.area').style.flexDirection = ''
        c('.ent').classList.remove('active')
        c('.c').classList.remove('active')
        c('.a').classList.remove('active')
        c('.e').classList.remove('active')
        c('.f').classList.remove('active')
        c('.g').classList.remove('active')
        c('.h').classList.remove('active')
        c('.i').classList.remove('active')
        c('.j').classList.remove('active')
        c('.k').classList.remove('active')
        c('.yaki').classList.remove('active')
        c('.sobre').classList.remove('active')
        c('.l').classList.remove('active')
        item.classList.add('active')

        uramakiJson.map((item, index) => {
          let uramakiItem = c('.models .item-content').cloneNode(true)

          uramakiItem.querySelector('.item-name').innerHTML = item.nome
          uramakiItem.querySelector('.desc').innerHTML = item.desc
          uramakiItem.querySelector('.item-price').innerHTML = item.price
          uramakiItem.querySelector('.item-img img').src = item.img

          uramakiItem.style.opacity = 0
          c('.area').append(uramakiItem)
          setTimeout(() => {
            uramakiItem.style.opacity = 1
          }, 100)
        })
        break;
      case 4:

        c('.area').innerHTML = ''
        c('.area').style.display = ''
        c('.area').style.flexDirection = ''
        c('.ent').classList.remove('active')
        c('.c').classList.remove('active')
        c('.d').classList.remove('active')
        c('.a').classList.remove('active')
        c('.f').classList.remove('active')
        c('.g').classList.remove('active')
        c('.h').classList.remove('active')
        c('.i').classList.remove('active')
        c('.j').classList.remove('active')
        c('.k').classList.remove('active')
        c('.yaki').classList.remove('active')
        c('.sobre').classList.remove('active')
        c('.l').classList.remove('active')
        item.classList.add('active')

        niguiriJson.map((item, index) => {
          let niguiriItem = c('.models .item-content').cloneNode(true)

          niguiriItem.querySelector('.item-name').innerHTML = item.nome
          niguiriItem.querySelector('.desc').innerHTML = item.desc
          niguiriItem.querySelector('.item-price').innerHTML = item.price
          niguiriItem.querySelector('.item-img img').src = item.img

          niguiriItem.style.opacity = 0
          c('.area').append(niguiriItem)
          setTimeout(() => {
            niguiriItem.style.opacity = 1
          }, 100)
        })
        break;
      case 5:

        c('.area').innerHTML = ''
        c('.area').style.display = ''
        c('.area').style.flexDirection = ''
        c('.ent').classList.remove('active')
        c('.c').classList.remove('active')
        c('.d').classList.remove('active')
        c('.e').classList.remove('active')
        c('.a').classList.remove('active')
        c('.g').classList.remove('active')
        c('.h').classList.remove('active')
        c('.i').classList.remove('active')
        c('.j').classList.remove('active')
        c('.k').classList.remove('active')
        c('.yaki').classList.remove('active')
        c('.sobre').classList.remove('active')
        c('.l').classList.remove('active')
        item.classList.add('active')

        dyoJson.map((item, index) => {
          let dyoItem = c('.models .item-content').cloneNode(true)

          dyoItem.querySelector('.item-name').innerHTML = item.nome
          dyoItem.querySelector('.desc').innerHTML = item.desc
          dyoItem.querySelector('.item-price').innerHTML = item.price
          dyoItem.querySelector('.item-img img').src = item.img

          dyoItem.style.opacity = 0
          c('.area').append(dyoItem)
          setTimeout(() => {
            dyoItem.style.opacity = 1
          }, 100)

        })
        break;
      case 6:

        c('.area').innerHTML = ''
        c('.area').style.display = ''
        c('.area').style.flexDirection = ''
        c('.ent').classList.remove('active')
        c('.c').classList.remove('active')
        c('.d').classList.remove('active')
        c('.e').classList.remove('active')
        c('.f').classList.remove('active')
        c('.a').classList.remove('active')
        c('.h').classList.remove('active')
        c('.i').classList.remove('active')
        c('.j').classList.remove('active')
        c('.k').classList.remove('active')
        c('.yaki').classList.remove('active')
        c('.sobre').classList.remove('active')
        c('.l').classList.remove('active')
        item.classList.add('active')

        sashimiJson.map((item, index) => {
          let sashimiItem = c('.models .item-content').cloneNode(true)

          sashimiItem.querySelector('.item-name').innerHTML = item.nome
          sashimiItem.querySelector('.desc').innerHTML = item.desc
          sashimiItem.querySelector('.item-price').innerHTML = item.price
          sashimiItem.querySelector('.item-img img').src = item.img

          sashimiItem.style.opacity = 0
          c('.area').append(sashimiItem)
          setTimeout(() => {
            sashimiItem.style.opacity = 1
          }, 100)

        })
        break;
      case 7:

        c('.area').innerHTML = ''
        c('.area').style.display = ''
        c('.area').style.flexDirection = ''
        c('.ent').classList.remove('active')
        c('.c').classList.remove('active')
        c('.d').classList.remove('active')
        c('.e').classList.remove('active')
        c('.f').classList.remove('active')
        c('.g').classList.remove('active')
        c('.a').classList.remove('active')
        c('.i').classList.remove('active')
        c('.j').classList.remove('active')
        c('.k').classList.remove('active')
        c('.yaki').classList.remove('active')
        c('.sobre').classList.remove('active')
        c('.l').classList.remove('active')
        item.classList.add('active')

        temakiJson.map((item, index) => {
          let temakiItem = c('.models .item-content').cloneNode(true)

          temakiItem.querySelector('.item-name').innerHTML = item.nome
          temakiItem.querySelector('.desc').innerHTML = item.desc
          temakiItem.querySelector('.item-price').innerHTML = item.price
          temakiItem.querySelector('.item-img img').src = item.img

          temakiItem.style.opacity = 0
          c('.area').append(temakiItem)
          setTimeout(() => {
            temakiItem.style.opacity = 1
          }, 100)
        })
        break;
      case 8:

        c('.area').innerHTML = ''
        c('.area').style.display = ''
        c('.area').style.flexDirection = ''
        c('.ent').classList.remove('active')
        c('.c').classList.remove('active')
        c('.d').classList.remove('active')
        c('.e').classList.remove('active')
        c('.f').classList.remove('active')
        c('.g').classList.remove('active')
        c('.h').classList.remove('active')
        c('.a').classList.remove('active')
        c('.j').classList.remove('active')
        c('.k').classList.remove('active')
        c('.yaki').classList.remove('active')
        c('.sobre').classList.remove('active')
        c('.l').classList.remove('active')
        item.classList.add('active')

        combinadosJson.map((item, index) => {
          let combItem = c('.models .item-content').cloneNode(true)

          combItem.querySelector('.item-name').innerHTML = item.nome
          combItem.querySelector('.desc').innerHTML = item.desc
          combItem.querySelector('.item-price').innerHTML = item.price
          combItem.querySelector('.item-img img').src = item.img

          combItem.style.opacity = 0
          c('.area').append(combItem)
          setTimeout(() => {
            combItem.style.opacity = 1
          }, 100)
        })
        break;
      case 9:

        c('.area').innerHTML = ''
        c('.area').style.display = ''
        c('.area').style.flexDirection = ''
        c('.ent').classList.remove('active')
        c('.c').classList.remove('active')
        c('.d').classList.remove('active')
        c('.e').classList.remove('active')
        c('.f').classList.remove('active')
        c('.g').classList.remove('active')
        c('.h').classList.remove('active')
        c('.i').classList.remove('active')
        c('.a').classList.remove('active')
        c('.k').classList.remove('active')
        c('.yaki').classList.remove('active')
        c('.sobre').classList.remove('active')
        c('.l').classList.remove('active')
        item.classList.add('active')

        rollJson.map((item, index) => {
          let rollItem = c('.models .item-content').cloneNode(true)

          rollItem.querySelector('.item-name').innerHTML = item.nome
          rollItem.querySelector('.desc').innerHTML = item.desc
          rollItem.querySelector('.item-price').innerHTML = item.price
          rollItem.querySelector('.item-img img').src = item.img

          rollItem.style.opacity = 0
          c('.area').append(rollItem)
          setTimeout(() => {
            rollItem.style.opacity = 1
          }, 100)
        })
        break;
      case 10:

        c('.area').innerHTML = ''
        c('.area').style.display = ''
        c('.area').style.flexDirection = ''
        c('.ent').classList.remove('active')
        c('.c').classList.remove('active')
        c('.d').classList.remove('active')
        c('.e').classList.remove('active')
        c('.f').classList.remove('active')
        c('.g').classList.remove('active')
        c('.h').classList.remove('active')
        c('.i').classList.remove('active')
        c('.j').classList.remove('active')
        c('.a').classList.remove('active')
        c('.yaki').classList.remove('active')
        c('.sobre').classList.remove('active')
        c('.l').classList.remove('active')
        item.classList.add('active')

        quentesJson.map((item, index) => {
          let quentItem = c('.models .item-content').cloneNode(true)

          quentItem.querySelector('.item-name').innerHTML = item.nome
          quentItem.querySelector('.desc').innerHTML = item.desc
          quentItem.querySelector('.item-price').innerHTML = item.price
          quentItem.querySelector('.item-img img').src = item.img

          quentItem.style.opacity = 0
          c('.area').append(quentItem)
          setTimeout(() => {
            quentItem.style.opacity = 1
          }, 100)
        })
        break;
      case 11:

        c('.area').innerHTML = ''
        c('.area').style.display = ''
        c('.area').style.flexDirection = ''
        c('.ent').classList.remove('active')
        c('.c').classList.remove('active')
        c('.d').classList.remove('active')
        c('.e').classList.remove('active')
        c('.f').classList.remove('active')
        c('.g').classList.remove('active')
        c('.h').classList.remove('active')
        c('.i').classList.remove('active')
        c('.j').classList.remove('active')
        c('.k').classList.remove('active')
        c('.a').classList.remove('active')
        c('.sobre').classList.remove('active')
        c('.l').classList.remove('active')
        item.classList.add('active')

        yakiJson.map((item, index) => {
          let yakiItem = c('.models .item-content').cloneNode(true)

          yakiItem.querySelector('.item-name').innerHTML = item.nome
          yakiItem.querySelector('.desc').innerHTML = item.desc
          yakiItem.querySelector('.item-price').innerHTML = item.price
          yakiItem.querySelector('.item-img img').src = item.img

          yakiItem.style.opacity = 0
          c('.area').append(yakiItem)
          setTimeout(() => {
            yakiItem.style.opacity = 1
          }, 100)
        })
        break;
      case 12:

        c('.area').innerHTML = ''
        c('.area').style.display = ''
        c('.area').style.flexDirection = ''
        c('.ent').classList.remove('active')
        c('.c').classList.remove('active')
        c('.d').classList.remove('active')
        c('.e').classList.remove('active')
        c('.f').classList.remove('active')
        c('.g').classList.remove('active')
        c('.h').classList.remove('active')
        c('.i').classList.remove('active')
        c('.j').classList.remove('active')
        c('.k').classList.remove('active')
        c('.yaki').classList.remove('active')
        c('.a').classList.remove('active')
        c('.l').classList.remove('active')
        item.classList.add('active')

        sobreJson.map((item, index) => {
          let sobreItem = c('.models .item-content').cloneNode(true)

          sobreItem.querySelector('.item-name').innerHTML = item.nome
          sobreItem.querySelector('.desc').innerHTML = item.desc
          sobreItem.querySelector('.item-price').innerHTML = item.price
          sobreItem.querySelector('.item-img img').src = item.img

          sobreItem.style.opacity = 0
          c('.area').append(sobreItem)
          setTimeout(() => {
            sobreItem.style.opacity = 1
          }, 100)
        })
        break;
      case 13:

        c('.area').innerHTML = ''
        c('.area').style.display = 'flex'
        c('.area').style.flexDirection = 'column'
        c('.ent').classList.remove('active')
        c('.c').classList.remove('active')
        c('.d').classList.remove('active')
        c('.e').classList.remove('active')
        c('.f').classList.remove('active')
        c('.g').classList.remove('active')
        c('.h').classList.remove('active')
        c('.i').classList.remove('active')
        c('.j').classList.remove('active')
        c('.k').classList.remove('active')
        c('.yaki').classList.remove('active')
        c('.sobre').classList.remove('active')
        c('.a').classList.remove('active')
        item.classList.add('active')
        bebidasJson.map((item, index) => {
          let bebiItem = c('.models2 .item-content2').cloneNode(true)

          bebiItem.querySelector('.drink-name').innerHTML = item.nome
          bebiItem.querySelector('.drink-price').innerHTML = item.price


          bebiItem.style.opacity = 0
          c('.area').append(bebiItem)
          setTimeout(() => {
            bebiItem.style.opacity = 1
          }, 300)
        })
        break;
      default:

    }

  })
})