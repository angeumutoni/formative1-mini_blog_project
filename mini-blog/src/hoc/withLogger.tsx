import { useEffect, type ComponentType } from 'react';

function withLogger<P extends object>(WrappedComponent: ComponentType<P>) {
  function WithLoggerComponent(props: P) {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);

      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  }

  WithLoggerComponent.displayName = `WithLogger(${WrappedComponent.name})`;

  return WithLoggerComponent;
}

export default withLogger;