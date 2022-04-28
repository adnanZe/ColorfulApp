import React from 'react';

const TITLE_WORDS = 'Color editor';

function Title(): JSX.Element {
  function addCustomPropCSS(order: number) {
    return { '--order': order } as React.CSSProperties;
  }

  return (
    <h1 className="title">
      {TITLE_WORDS.split('').map((letter: string, index: number) => {
        return (
          <span
            className={letter == ' ' ? 'space' : 'letter'}
            style={addCustomPropCSS(index + 11)}
            key={`${letter + index.toString()}`}
          >
            {letter !== ' ' ? letter : 's'}
          </span>
        );
      })}
      <span className="logoTitle" style={addCustomPropCSS(23)}></span>
    </h1>
  );
}

export default Title;