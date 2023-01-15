import React from 'react';
import { useState } from 'react';
import ReactQuill from 'react-quill';
// import  { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// 이미지 크기 조절하는 것(오류가 나서 꺼놈, 모듈 설치해야함)
// import { ImageResize } from 'quill-image-resize-module-ts';

// Quill.register('modules/imageResize', ImageResize);

export const EditorWr = () => {
  const modules = React.useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],

          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['image', 'video'],

          ['clean'],
        ],
        handlers: {
          //   image: imageHandler,
        },
      },
      //   imageResize: {
      //     parchment: Quill.import('parchment'),
      //     modules: ['Resize', 'DisplaySize'],
      //   },
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      },
    };
  }, []);
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];

  const [value, setValue] = useState(''); // 에디터 속 콘텐츠를 저장하는 state

  return (
    <>
      <ReactQuill
        // 둘중 하나!
        // ref={quillRef}
        // forwardedRef={quillRef}
        theme='snow'
        placeholder='플레이스 홀더'
        value={value}
        onChange={setValue}
        modules={modules}
        bounds={'#root'}
        formats={formats}
        style={{ height: '30rem', margin: '1%', marginBottom: '7rem' }}
      />
    </>
  );
};
