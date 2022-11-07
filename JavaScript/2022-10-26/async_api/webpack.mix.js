const mix = require('laravel-mix');

mix.setPublicPath('public');

mix.version();

if (mix.inProduction()) {
	mix.sourceMaps();
}

mix.js('resources/js/posts.js', 'public/js/posts.js');
mix.js('resources/js/post.js', 'public/js/post.js');
mix.js('resources/js/app.js', 'public/js/app.js');
mix.js('resources/js/users.js', 'public/js/users.js');
mix.js('resources/js/user.js', 'public/js/user.js');
mix.js('resources/js/albums.js', 'public/js/albums.js');
mix.js('resources/js/album.js', 'public/js/album.js');
mix.js('resources/js/header.js', 'public/js/header.js');
mix.js('resources/js/search.js', 'public/js/search.js');
mix.js('resources/js/create-post.js', 'public/js/create-post.js');
mix.js('resources/js/edit-post.js', 'public/js/edit-post.js');
mix.js('resources/js/create-user.js', 'public/js/create-user.js');
mix.js('resources/js/edit-user.js', 'public/js/edit-user.js');

mix.sass('resources/sass/user.scss', 'public/css/user.css');
mix.sass('resources/sass/users.scss', 'public/css/users.css');
mix.sass('resources/sass/app.scss', 'public/css/app.css');
mix.sass('resources/sass/posts.scss', 'public/css/posts.css');
mix.sass('resources/sass/post.scss', 'public/css/post.css');
mix.sass('resources/sass/albums.scss', 'public/css/albums.css');
mix.sass('resources/sass/album.scss', 'public/css/album.css');
mix.sass('resources/sass/forall.scss', 'public/css/forall.css');
mix.sass('resources/sass/search.scss', 'public/css/search.css');
mix.sass('resources/sass/create-post.scss', 'public/css/create-post.css');
mix.sass('resources/sass/edit-post.scss', 'public/css/edit-post.css');
mix.sass('resources/sass/create-user.scss', 'public/css/create-user.css');
mix.sass('resources/sass/edit-user.scss', 'public/css/edit-user.css');