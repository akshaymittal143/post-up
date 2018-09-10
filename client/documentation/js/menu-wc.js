'use strict';

customElements.define(
  'compodoc-menu',
  class extends HTMLElement {
    constructor() {
      super();
      this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
      this.render(this.isNormalMode);
    }

    render(isNormalMode) {
      let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">client documentation</a>
        </li>
        <li class="divider"></li>
        ${
          isNormalMode
            ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
`
            : ''
        }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"'}>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"'}>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${
                                      isNormalMode
                                        ? 'data-target="#components-links-module-AppModule-dcdfe973d74453cc7895f3d35f338dc4"'
                                        : 'data-target="#xs-components-links-module-AppModule-dcdfe973d74453cc7895f3d35f338dc4"'
                                    }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${
                                      isNormalMode
                                        ? 'id="components-links-module-AppModule-dcdfe973d74453cc7895f3d35f338dc4"'
                                        : 'id="xs-components-links-module-AppModule-dcdfe973d74453cc7895f3d35f338dc4"'
                                    }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${
                                      isNormalMode
                                        ? 'data-target="#injectables-links-module-AppModule-dcdfe973d74453cc7895f3d35f338dc4"'
                                        : 'data-target="#xs-injectables-links-module-AppModule-dcdfe973d74453cc7895f3d35f338dc4"'
                                    }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-AppModule-dcdfe973d74453cc7895f3d35f338dc4"'
                                        : 'id="xs-injectables-links-module-AppModule-dcdfe973d74453cc7895f3d35f338dc4"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>PostService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${
                                      isNormalMode
                                        ? 'data-target="#components-links-module-HomeModule-28d7b0d90e6faeb0933cea410625bcc0"'
                                        : 'data-target="#xs-components-links-module-HomeModule-28d7b0d90e6faeb0933cea410625bcc0"'
                                    }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${
                                      isNormalMode
                                        ? 'id="components-links-module-HomeModule-28d7b0d90e6faeb0933cea410625bcc0"'
                                        : 'id="xs-components-links-module-HomeModule-28d7b0d90e6faeb0933cea410625bcc0"'
                                    }>
                                        <li class="link">
                                            <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PageNonfoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNonfoundComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/PostModule.html" data-type="entity-link">PostModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${
                                      isNormalMode
                                        ? 'data-target="#components-links-module-PostModule-6cce629e7d6dfb01e3285ef26742b307"'
                                        : 'data-target="#xs-components-links-module-PostModule-6cce629e7d6dfb01e3285ef26742b307"'
                                    }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${
                                      isNormalMode
                                        ? 'id="components-links-module-PostModule-6cce629e7d6dfb01e3285ef26742b307"'
                                        : 'id="xs-components-links-module-PostModule-6cce629e7d6dfb01e3285ef26742b307"'
                                    }>
                                        <li class="link">
                                            <a href="components/EditPostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditPostComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NewPostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewPostComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostDetailsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostFormComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PostListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchPostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchPostComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PostRoutingModule.html" data-type="entity-link">PostRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"'}>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"'}>
                    <li class="link">
                        <a href="classes/Post.html" data-type="entity-link">Post</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"'}>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"'}>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
      this.innerHTML = tp.strings;
    }
  }
);
