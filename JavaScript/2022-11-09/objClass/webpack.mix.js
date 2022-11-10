const mix = require('laravel-mix');

mix.setPublicPath('docs');

mix.version();

if (mix.inProduction()) {
	mix.sourceMaps();
}

mix.js('resources/js/app.js', 'docs/js/app.js');
mix.sass('resources/sass/app.scss', 'docs/css/app.css');