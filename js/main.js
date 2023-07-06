const cars = [
    {       
        image: "./images/1952-ford-f150.webp",
        name: '1952 Ford F150',
        details: 'The iconic 1952 Ford F150 stands as a timeless symbol of rugged American craftsmanship, exuding vintage charm and commanding attention on any road it traverses.',
        price: 45000,
        carNumber: 1
    },
    {
        image: "./images/1957-buick.webp",
        name: '1957 Buick',
        details: 'The 1957 Buick epitomizes automotive elegance, with its sleek lines, distinctive chrome accents, and luxurious interior, making it a true icon of mid-century design and craftsmanship.',
        price: 55000,
        carNumber: 2
    },
    {
        image: "./images/1957-chevrolet-bel-air.webp",
        name: '1957 Chevrolet Bel Air',
        details: 'The 1957 Chevrolet Bel Air epitomizes the golden era of American automobiles, boasting iconic tailfins, chrome details, and a stylish two-tone design that continues to captivate car enthusiasts to this day.',
        price: 75000,
        carNumber: 3
    },
    {
        image: "./images/1957-chevrolet-nomad.webp",
        name: '1957 Chevrolet Nomad',
        details: 'The 1957 Chevrolet Nomad showcases a harmonious blend of style and utility, with its distinct two-door wagon design and iconic chrome accents, making it a beloved symbol of automotive innovation and timeless beauty.',
        price: 85000,
        carNumber: 4
    },
    {
        image: "./images/1957-chevy-bel-air.webp",
        name: '1957 Chevrolet Bel Air',
        details: 'The 1957 Chevrolet Bel Air convertible exudes timeless allure with its sleek lines, iconic chrome details, and the freedom of open-top motoring, capturing the essence of classic American style and automotive freedom.',
        price: 95000,
        carNumber: 5
    },
    { 
        image: "./images/1957-chrysler-300.webp" ,
        name: '1957 Chrysler 300',
        details: 'The 1957 Chrysler 300 represents a pinnacle of automotive luxury and performance, with its striking design, powerful V8 engine, and refined interior, making it a coveted icon of mid-century elegance and engineering excellence',
        price: 60000,
        carNumber: 6
    },
    {
        image: "./images/1957-oldsmobile-98.webp" ,
        name: '1957 Oldsmobile 98',
        details: 'The 1957 Oldsmobile 98 epitomizes sophistication and grandeur, boasting a graceful design, luxurious features, and a powerful V8 engine, solidifying its place as a true symbol of automotive opulence and timeless beauty.',
        price: 50000,
        carNumber: 7    
    },
    {
        image: "./images/1958-chevy-truck.webp",
        name: '1958 Chevrolet Apache',
        details: 'The 1958 Chevrolet Truck embodies rugged versatility and classic American design, with its robust construction, distinctive grille, and enduring presence on and off the road, capturing the essence of vintage truck heritage.',
        price: 30000,
        carNumber: 8
    },
    {       
        image: "./images/1959-cadillac-eldorado.webp",
        name: '1959 Cadillac ElDorado',
        details: 'The 1959 Cadillac Eldorado stands as a true automotive icon, with its iconic tailfins, lavish chrome details, and opulent styling, representing the epitome of 1950s luxury and embodying the spirit of American car culture.',
        price: 110000,
        carNumber: 9
    },
    {     
        image: "./images/1962-buick-electra.webp",
        name: '1962 Buick Electra 225',
        details: 'The 1962 Buick Electra 225 radiates elegance and power, showcasing a sleek design, spacious interior, and a mighty V8 engine, solidifying its status as a luxurious and commanding presence on the open road.',
        price: 40000,
        carNumber: 10
    },
    {       
        image: "./images/1962-lincoln-continental.webp",
        name: '1962 Lincoln Continental',
        details: 'The 1962 Lincoln Continental exudes timeless sophistication, with its sleek lines, iconic suicide doors, and spacious interior, embodying luxury and refinement that continues to captivate automotive enthusiasts and connoisseurs.',
        price: 70000,
        carNumber: 11
    },
    {      
        image: "./images/1964-chevrolet-impala.webp" ,
        name: '1964 Chevrolet Impala',
        details: 'The 1964 Chevrolet Impala epitomizes classic American style and power, featuring sleek lines, iconic dual headlamps, and a range of powerful V8 engines, making it a beloved symbol of automotive excellence and timeless design.',
        price: 55000,
        carNumber: 12
    },
    {
        image: "./images/1967-ford-mustang.webp",
        name: '1967 Ford Mustang Fastback',
        details: 'The 1967 Ford Mustang Fastback embodies the essence of American muscle car heritage, boasting a sleek fastback design, powerful V8 engines, and a captivating presence that continues to inspire admiration among automotive enthusiasts and collectors.',
        price: 80000,
        carNumber: 13
    },
    {
        image: "./images/1968-chevrolet-camaro.webp",
        name: '1968 Chevrolet Camaro',
        details: 'The 1968 Chevrolet Camaro personifies the golden age of American muscle cars, with its aggressive stance, powerful engines, and iconic styling, cementing its status as an enduring symbol of speed, performance, and automotive excellence.',
        price: 70000,
        carNumber: 14
    },
    {  
        image: "./images/1970-road-runner.webp",
        name: '1970 Plymouth Road Runner',
        details: 'The 1970 Plymouth Road Runner stands as a legendary muscle car, characterized by its bold design, powerful performance, and unmistakable "beep-beep" charm, representing the pinnacle of American automotive muscle and raw driving excitement.',
        price: 90000,
        carNumber: 15
    },
    {
        image: "./images/1971-ford-bronco.webp",
        name: '1971 Ford Bronco',
        details: 'The 1971 Ford Bronco represents the rugged spirit of adventure, with its versatile design, capable off-road performance, and timeless charm, solidifying its place as an iconic and beloved SUV in automotive history.',
        price: 50000,
        carNumber: 16
    }
 
] 


// checkout variables

let checkOutImage = document.querySelector('.checkout-image')
let checkOutName = document.querySelector('.checkout-name')
let checkOutPrice = document.querySelector('.checkout-price')
let checkOutRemove = document.querySelector('.remove-car')

// inventory variables

let carName = document.querySelectorAll('.car-name')
let carDetail = document.querySelectorAll('.car-details')
let carPrice = document.querySelectorAll('.car-price')
let buyCarBtn = document.querySelectorAll('.buy-car')


function setSelectedCar (car) {
    localStorage.setItem('selectedCarImage', car.image)
    localStorage.setItem('selectedCarName', car.name)
    localStorage.setItem('selectedCarPrice', car.price)
}


buyCarBtn.forEach( (carBtn, index) => {
    carBtn.addEventListener('click', () => {
        let selectedCar = cars[index]
        setSelectedCar(selectedCar)
        checkOutImage.src = selectedCar.image
        checkOutName.innerText = selectedCar.name
        checkOutPrice.innerText = selectedCar.price
    })
})


window.addEventListener('load', () => {
    let selectedCarImage = localStorage.getItem('selectedCarImage' )
    let selectedCarName = localStorage.getItem('selectedCarName' )
    let selectedCarPrice = localStorage.getItem('selectedCarPrice' )
    
    if (selectedCarImage && selectedCarName && selectedCarPrice) {
        checkOutImage.src = selectedCarImage
        checkOutName.innerText = selectedCarName
        checkOutPrice.innerText = '$'+ selectedCarPrice
        checkOutRemove.style.display = 'block';
    } else if (!selectedCarImage && !selectedCarName && !selectedCarPrice) {
        checkOutRemove.style.display = 'none';
    }
    checkOutRemove.addEventListener ('click', () => {
        if (selectedCarImage && selectedCarName && selectedCarPrice) {
            localStorage.removeItem('selectedCarImage')
            localStorage.removeItem('selectedCarName')
            localStorage.removeItem('selectedCarPrice')
            location.reload()
        }
    })
})

const displayCars = cars.map((car, index) => {
    const inventoryCarName = carName[index]
    const inventoryCarDetail = carDetail[index]
    const inventoryCarPrice = carPrice[index]
    inventoryCarName.textContent = car.name
    inventoryCarDetail.textContent = car.details
    inventoryCarPrice.textContent = '$' + car.price
})

