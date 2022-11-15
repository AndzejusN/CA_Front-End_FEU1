const mix = require('laravel-mix');

mix.setPublicPath('docs');

mix.version();

if (mix.inProduction()) {
	mix.sourceMaps();
}

mix.js('resources/js/app.js', 'docs/js/app.js');
mix.js('resources/js/oop.js', 'docs/js/oop.js');
mix.js('resources/js/oopCompanies.js', 'docs/js/oopCompanies.js');
mix.js('resources/js/oopCars.js', 'docs/js/oopCars.js');

mix.sass('resources/sass/app.scss', 'docs/css/app.css');