'use client';

import { useCallback, useEffect, useState, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Ring from '@/components/Ring';
import styles from '@/styles/components/SearchBar.module.scss';
import cn from 'classnames';

const SearchServerParams = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [debouncedValue, setDebouncedValue] = useState<string>('');
  const [mounted, setMounted] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSearchParams = useCallback(
    (debouncedValue: string) => {
      let params = new URLSearchParams(window.location.search);
      if (debouncedValue.length > 0) {
        params.set('search', debouncedValue);
      } else {
        params.delete('search');
      }
      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`);
      });
    },
    [pathname, router]
  );

  // EFFECT: Set Initial Params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('search') ?? '';
    setInputValue(searchQuery);
  }, []);

  // EFFECT: Set Mounted
  useEffect(() => {
    if (debouncedValue.length > 0 && !mounted) {
      setMounted(true);
    }
  }, [debouncedValue, mounted]);

  // EFFECT: Debounce Input Value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  // EFFECT: Search Params
  useEffect(() => {
    if (mounted) handleSearchParams(debouncedValue);
  }, [debouncedValue, handleSearchParams, mounted]);

  return (
    <div
      className={cn(
        styles['search'],
        'bg-tertiary mt-lg-32 mt-sm-24 mx-lg-40 mx-sm-16'
      )}>
      <input
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
        placeholder='Search our diverse menu'
        className={styles['search-input']}
      />
      {isPending && (
        <div className={cn(styles['spinner'], 'mr-lg-8 mr-sm-8')}>
          <Ring size={32} />
        </div>
      )}
    </div>
  );
};

export default SearchServerParams;
