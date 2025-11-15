import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { colors } from '../../constants/theme';

interface LoadingStateProps {
  message?: string;
}

/**
 * Estado de loading centralizado com spinner
 */
export function LoadingState({ message = 'Carregando portfólio...' }: LoadingStateProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" style={{ color: colors.primary }} />
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          {message}
        </p>
      </div>
    </div>
  );
}

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

/**
 * Estado de erro centralizado com botão de retry
 */
export function ErrorState({ 
  message = 'Erro ao carregar dados. Por favor, tente novamente.',
  onRetry
}: ErrorStateProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-red-500 mb-4">{message}</p>
        {onRetry && (
          <Button onClick={onRetry} style={{ backgroundColor: colors.primary }}>
            Tentar Novamente
          </Button>
        )}
      </div>
    </div>
  );
}
