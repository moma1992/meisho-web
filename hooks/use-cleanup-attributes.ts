'use client';

import { useCallback } from 'react';

export function useCleanupAttributes() {
  return useCallback(() => {
    const attributesToRemove = [
      'data-new-gr-c-s-check-loaded',
      'data-gr-ext-installed',
      'grammarly-extension'
    ];

    const removeAttributes = (element: HTMLElement) => {
      attributesToRemove.forEach(attr => {
        if (element.hasAttribute(attr)) {
          element.removeAttribute(attr);
        }
      });
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && 
            mutation.attributeName && 
            attributesToRemove.includes(mutation.attributeName)) {
          removeAttributes(mutation.target as HTMLElement);
        }
      });
    });

    // Initial cleanup
    removeAttributes(document.documentElement);
    removeAttributes(document.body);

    // Observe future changes
    observer.observe(document.documentElement, {
      attributes: true,
      subtree: true,
      attributeFilter: attributesToRemove
    });

    return () => observer.disconnect();
  }, []);
}