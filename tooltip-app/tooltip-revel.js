// const creador = document.querySelector('#icono');
// const tooltip = document.querySelector('#tooltip');

// const calcularPosicionTooltip = () => {
// 	// Calculamos las coordenadas del icono.
// 	const x = creador.offsetLeft;
// 	const y = creador.offsetTop;

// 	// Calculamos el tamaño del tooltip.
// 	const anchoTooltip = tooltip.clientWidth;
// 	const altoTooltip = tooltip.clientHeight;

// 	// Calculamos donde posicionaremos el tooltip.
// 	const izquierda = x - (anchoTooltip / 2) + 17;
// 	const arriba = y - altoTooltip - 40;

// 	tooltip.style.left = `${izquierda}px`;
// 	tooltip.style.top = `${arriba}px`;
// };

// window.addEventListener('load', () => calcularPosicionTooltip());
// window.addEventListener('resize', () => calcularPosicionTooltip());

// creador.addEventListener('mouseenter', () => {
// 	tooltip.classList.add('activo');
// 	calcularPosicionTooltip();
// });

// let timer;
// creador.addEventListener('mouseleave', () => {
// 	timer = setTimeout(() => {
// 		tooltip.classList.remove('activo');
// 	}, 500);
// });

// tooltip.addEventListener('mouseenter', () => clearTimeout(timer));
// tooltip.addEventListener('mouseleave', () => tooltip.classList.remove('activo'));



const tooltip = document.querySelector('.tooltip');
const creador = document.querySelector('.creador');


let timer;
creador.addEventListener('mouseleave', () => {
	timer = setTimeout(() => {
		tooltip.style.opacity = `0`;
		tooltip.style.visibility = `hidden`;
		tooltip.style.transform = `translateY(10px)`;
	}, 1000);
});

tooltip.addEventListener('mouseenter', () => clearTimeout(timer));

creador.addEventListener('mouseenter', () => {
	tooltip.style.opacity = `1`;
	tooltip.style.visibility = `visible`;
	tooltip.style.transform = `translateY(0px)`;
});

tooltip.addEventListener('mouseenter', () => clearTimeout(timer));

tooltip.addEventListener('mouseleave', () => {
	tooltip.style.opacity = `0`;
	tooltip.style.visibility = `hidden`;
	tooltip.style.transform = `translateY(10px)`;
});

//Mejorar con un timer al mouseleave de la tooltip