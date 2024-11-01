'use client';

import { useEffect } from 'react';

export function useRemoveGrammarly() {
  useEffect(() => {
    const attributesToRemove = [
      'data-new-gr-c-s-check-loaded',
      'data-gr-ext-installed'
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
            attributesToRemove.includes(mutation.attributeName || '')) {
          removeAttributes(mutation.target as HTMLElement);
        }
      });
    });

    const body = document.body;
    removeAttributes(body);

    observer.observe(body, {
      attributes: true,
      attributeFilter: attributesToRemove,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);
}