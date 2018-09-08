var ROUTES_INDEX = {
  name: '<root>',
  kind: 'module',
  className: 'AppModule',
  children: [
    {
      name: 'routes',
      filename: 'src/app/app-routing.module.ts',
      module: 'AppRoutingModule',
      children: [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: 'HomeComponent' },
        { path: 'posts', component: 'PostListComponent' },
        { path: '**', component: 'PageNonfoundComponent' }
      ],
      kind: 'module'
    },
    {
      name: 'routes',
      filename: 'src/app/home/home-routing.module.ts',
      module: 'HomeRoutingModule',
      children: [{ path: 'home', component: 'HomeComponent' }],
      kind: 'module'
    },
    {
      name: 'routes',
      filename: 'src/app/post/post-routing.module.ts',
      module: 'PostRoutingModule',
      children: [{ path: 'posts', component: 'PostListComponent' }],
      kind: 'module'
    }
  ]
};
