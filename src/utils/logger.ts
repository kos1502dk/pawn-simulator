/**
 * Simple logger utility wrapping console methods
 *
 * In production, this should be replaced with a third-party logging service
 */

interface Logger {
  debug: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
}

const logger: Logger = {
  debug: (...args: unknown[]) => {
    // Integrate with third-party service here if needed
    console.log(...args);
  },
  info: (...args: unknown[]) => {
    // Integrate with third-party service here if needed
    console.info(...args);
  },
  warn: (...args: unknown[]) => {
    // Integrate with third-party service here if needed
    console.warn(...args);
  },
  error: (...args: unknown[]) => {
    // Integrate with third-party service here if needed
    console.error(...args);
  },
};

export default logger;
