import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';

export type CommandItem = {
  id: string;
  label: string;
  hint: string;
  path: string;
};

type CommandPaletteProps = {
  commands: CommandItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelect: (path: string) => void;
};

function CommandPalette({ commands, isOpen, onClose, onSelect }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const deferredQuery = useDeferredValue(query);

  const filteredCommands = useMemo(() => {
    const term = deferredQuery.trim().toLowerCase();

    if (!term) {
      return commands;
    }

    return commands.filter((command) => {
      const haystack = `${command.label} ${command.hint} ${command.path}`.toLowerCase();
      return haystack.includes(term);
    });
  }, [commands, deferredQuery]);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setSelectedIndex(0);
      return;
    }

    inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [deferredQuery]);

  if (!isOpen) {
    return null;
  }

  const handleSelect = (path: string) => {
    onSelect(path);
    setQuery('');
    setSelectedIndex(0);
  };

  return (
    <div className="palette-backdrop" role="presentation" onClick={onClose}>
      <div
        aria-label="Command palette"
        aria-modal="true"
        className="palette"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="palette__header">
          <label className="palette__prompt" htmlFor="command-search">
            /
          </label>
          <input
            ref={inputRef}
            autoComplete="off"
            className="palette__input"
            id="command-search"
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'ArrowDown') {
                event.preventDefault();
                setSelectedIndex((current) => Math.min(current + 1, Math.max(filteredCommands.length - 1, 0)));
              }

              if (event.key === 'ArrowUp') {
                event.preventDefault();
                setSelectedIndex((current) => Math.max(current - 1, 0));
              }

              if (event.key === 'Enter' && filteredCommands[selectedIndex]) {
                event.preventDefault();
                handleSelect(filteredCommands[selectedIndex].path);
              }
            }}
            placeholder="Go to projects, about, contact..."
            value={query}
          />
        </div>

        <div className="palette__results">
          {filteredCommands.length === 0 ? (
            <p className="palette__empty">No matching routes.</p>
          ) : (
            filteredCommands.map((command, index) => (
              <button
                key={command.id}
                className={`palette__item ${index === selectedIndex ? 'is-selected' : ''}`}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => handleSelect(command.path)}
                type="button"
              >
                <span className="palette__label">{command.label}</span>
                <span className="palette__hint">{command.hint}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;
