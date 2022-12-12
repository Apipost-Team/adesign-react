import React, { useState, useEffect, useRef, LegacyRef } from 'react';
import './index.less';
import cn from 'classnames';
import hljs from 'highlight.js';
import Copy from '../../assets/copy.svg';
import Code from '../../assets/code.svg';
import 'highlight.js/styles/github.css';
import {Message} from  'adesign-react'

interface ExampleItemProps {
  title?: string;
  description: string;
  children: React.ReactNode;
  codeContent: string;
}

const ExampleItem: React.FC<ExampleItemProps> = (props) => {
  const { title, description, children, codeContent } = props;
  const refCode = useRef<HTMLElement>(null);

  const [showCode, setShowCode] = useState<boolean>(false);

  const handleToggleShowCode = () => {
    setShowCode(!showCode);
  };

  useEffect(() => {
    if (refCode?.current !== undefined) {
      hljs.highlightElement(refCode.current);
    }
  }, []);

  // 写入剪贴板
  const copyStringToClipboard = (str: string) => {
    const clipboardObj = navigator.clipboard;
    const copyData = (copiedText: string) => {
      try {
        const textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.style.position = 'fixed';
        textarea.style.clip = 'rect(0 0 0 0)';
        textarea.style.top = '10px';
        textarea.value = copiedText;
        textarea.select();
        document.execCommand('copy', true);
        document.body.removeChild(textarea);
      } catch (error) {
        console.log('error');
      }
    };
    if (clipboardObj) {
      clipboardObj.writeText(str).then(
        () => {
          Message('success', '复制成功');
          console.log('ok');
        },
        () => {
          copyData(str);
        }
      );
    } else {
      copyData(str);
    }
  };

  const handleCopyData = () => {
    copyStringToClipboard(codeContent);
  };

  return (
    <div className="example-item">
      <div className="base-title">{title}</div>
      <div className="sec-title">{description}</div>
      <div className="example">
        <div className="example-content">{children}</div>
        <div className="example-buttons">
          <div className="exam-button" onClick={handleCopyData}>
            <Copy />
          </div>
          <div
            className={cn('exam-button', { active: showCode === true })}
            onClick={handleToggleShowCode}
          >
            <Code />
          </div>
        </div>
        <div className="example-code" style={{ display: showCode ? 'block' : 'none' }}>
          <pre>
            <code ref={refCode} className="javascript" style={{ background: 'none' }}>
              {codeContent}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ExampleItem;
