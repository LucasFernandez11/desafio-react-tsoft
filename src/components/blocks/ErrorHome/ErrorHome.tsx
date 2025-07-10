import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button/Button';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    this.props.onReset?.();
  };

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-2xl font-bold text-red-500 mb-4">¡Ups! Algo salió mal</h1>
            <p className="mb-6 text-gray-300">
              Lo sentimos, ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.
            </p>
            {this.state.error && (
              <details className="mb-6 text-left bg-gray-700 p-3 rounded text-sm text-gray-300">
                <summary className="cursor-pointer font-medium">Detalles del error</summary>
                <div className="mt-2 p-2 bg-gray-900 rounded overflow-auto max-h-40">
                  <p className="text-red-400">{this.state.error.toString()}</p>
                  <pre className="text-xs text-gray-400 mt-2 whitespace-pre-wrap">
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              </details>
            )}
            <div className="flex justify-center gap-4">
              <Button 
                onClick={this.handleReset}
                variant="primary"
                className="px-4 py-2"
              >
                Reintentar
              </Button>
              <Button 
                as={Link} 
                to="/" 
                variant="secondary"
                className="px-4 py-2"
              >
                Ir al inicio
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
