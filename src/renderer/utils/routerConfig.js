function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex.default : ex;
}

const reactRouter = require('react-router');
const React = _interopDefault(require('react'));
const CacheRoute = require('react-router-cache-route');
const styles = require('../App.scss');

console.log(styles, 'styles');
console.log(CacheRoute, 'CacheRoute');
function matchRoutes(
  routes,
  pathname,
  /* not public API */
  branch
) {
  if (branch === void 0) {
    branch = [];
  }

  routes.some(function (route) {
    const match = route.path
      ? reactRouter.matchPath(pathname, route)
      : branch.length
      ? branch[branch.length - 1].match // use parent match
      : reactRouter.Router.computeRootMatch(pathname); // use default "root" match

    if (match) {
      branch.push({
        route,
        match,
      });

      if (route.routes) {
        matchRoutes(route.routes, pathname, branch);
      }
    }

    return match;
  });
  return branch;
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (let i = 1; i < arguments.length; i++) {
        const source = arguments[i];

        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function renderRoutes(routes, extraProps, switchProps) {
  if (extraProps === void 0) {
    extraProps = {};
  }

  if (switchProps === void 0) {
    switchProps = {};
  }

  return routes
    ? React.createElement(
        CacheRoute.CacheSwitch,
        switchProps,
        routes.map(function (route, i) {
          // return <CacheRoute.default {
          //   key: route.key || i,
          //   path: route.path,
          //   className: styles.routerConfig,
          //   exact: route.exact,
          //   strict: route.strict,
          //   render: function render(props) {
          //     return route.render
          //       ? route.render({ ...props, ...extraProps, route })
          //       : React.createElement(route.component, {
          //           ...props,
          //           ...extraProps,
          //           route,
          //         });
          //   }}/>
          return React.createElement(CacheRoute.default, {
            key: route.key || i,
            path: route.path,
            behavior: (cached) =>
              cached
                ? {
                    style: {
                      height: '100%',
                      display: 'none',
                    },
                  }
                : {
                    style: {
                      height: '100%',
                      display: 'block',
                    },
                  },
            exact: route.exact,
            strict: route.strict,
            render: function render(props) {
              return route.render
                ? route.render({ ...props, ...extraProps, route })
                : React.createElement(route.component, {
                    ...props,
                    ...extraProps,
                    route,
                  });
            },
          });
        })
      )
    : null;
}

exports.matchRoutes = matchRoutes;
exports.renderRoutes = renderRoutes;
// # sourceMappingURL=react-router-config.js.map
