/* saatin background rengini değiştirmek için oluşturulan js kodları */
/* js codes generated to change the background color of the clock */

const btnClock = document.querySelector('#btnClock')
        const clockBackground = document.querySelector('#clockBackground')
        const colors = ['burlywood', 'white', 'aqua', 'red', 'green', 'grey','lightblue','lightgreen']

        clockBackground.style.backgroundColor = 'violet'
        btnClock.addEventListener('click', changeBackground)
    
        function changeBackground(){
        const colorIndex= parseInt(Math.random()*colors.length)
        clockBackground.style.backgroundColor = colors[colorIndex]
        }