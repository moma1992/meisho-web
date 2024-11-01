'use client';

import { useCallback } from 'react';

export function useAttributeRemover(attributesToRemove: string[]) {
  return useCallback((element: HTMLElement) => {
    const removeAttrs = () => {
      attributesToRemove.forEach(attr => {
        if (element.hasAttribute(attr)) {
          element.removeAttribute(attr);
        }
      });
    };

    // Initial cleanup
    removeAttrs();

    // Setup observer for future changes
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && 
            mutation.attributeName && 
            attributesToRemove.includes(mutation.attributeName)) {
          const target = mutation.target as HTMLElement;
          target.removeAttribute(mutation.attributeName);
        }
      });
    });

    observer.observe(element, {
      attributes: true,
      attributeFilter: attributesToRemove
    });

    return () => observer.disconnect();
  }, [attributesToRemove]);
}