import {
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
  type ContentEditableEvent,
} from 'react-simple-wysiwyg';

import './RichTextEditor.scss';
import BtnBold from './Toolbar/BtnBold';
import BtnItalic from './Toolbar/BtnItalic';
import BtnUnderline from './Toolbar/BtnUnderline';
import BtnUndo from './Toolbar/BtnUndo';
import BtnRedo from './Toolbar/BtnRedo';
import BtnOrderedList from './Toolbar/BtnOrderedList';
import BtnUnorderedList from './Toolbar/BtnUnorderedList';
import BtnStrikeThrough from './Toolbar/BtnStrikeThrough';

type Props = {
  invalid?: boolean;
  readOnly?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export const RichTextEditor = ({ value, readOnly, onChange }: Props) => {

  const handleChange = (event: ContentEditableEvent) => {
    onChange?.(event.target.value);
  }

  return (
    <div className="rsw-editor-wrapper" aria-readonly={readOnly}>
      <EditorProvider>
        <Editor
          value={value}
          disabled={readOnly}
          onChange={handleChange}
        >
          {!readOnly && (
            <Toolbar>
              <BtnUndo />
              <BtnRedo />
              <Separator />
              <BtnBold />
              <BtnItalic />
              <BtnUnderline />
              <BtnStrikeThrough />
              <Separator />
              <BtnOrderedList />
              <BtnUnorderedList />
            </Toolbar>
          )}
        </Editor>
      </EditorProvider>
    </div>
  );
}
