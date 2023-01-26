import React from 'react';
// import { useState } from 'react';
import ReactQuill from 'react-quill';
// import  { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// 이미지 크기 조절하는 것(오류가 나서 꺼놈, 모듈 설치해야함)
// import { ImageResize } from 'quill-image-resize-module-ts';
// import { useEffect } from 'react';
import axios from 'axios';

// Quill.register('modules/imageResize', ImageResize);

export const EditorWr = (props: any) => {
  const QuillRef = React.useRef<ReactQuill>();

  const imageHandler = () => {
    // file input 임의 생성
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.click();

    input.onchange = async () => {
      const file = input.files;
      const formData = new FormData();

      if (file) {
        formData.append('file', file[0]);
      }

      // file 데이터 담아서 서버에 전달하여 이미지 업로드
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/file/upload`, formData);

      if (QuillRef.current) {
        // 현재 Editor 커서 위치에 서버로부터 전달받은 이미지 불러오는 url을 이용하여 이미지 태그 추가
        const index = (QuillRef.current.getEditor().getSelection() as any).index;

        const quillEditor = QuillRef.current.getEditor();
        quillEditor.setSelection(index, 1);

        quillEditor.clipboard.dangerouslyPasteHTML(
          index,
          `<img src=${res.data} alt=${'alt text'} />`,
        );
      }
    };
  };

  const modules = React.useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ align: [] }],
          ['link', 'image'],
          ['clean'],
          [{ color: [] }],
          // [{ header: [1, 2, 3, false] }],
          // ['bold', 'italic', 'underline', 'strike', 'blockquote'],

          // [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          // ['image', 'video'],

          // ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      table: true,
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

  // console.log(props.descriptEdit);
  // const [value, setValue] = useState(''); // 에디터 속 콘텐츠를 저장하는 state

  return (
    <>
      <ReactQuill
        // 둘중 하나!
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        // ref={QuillRef}
        // forwardedRef={quillRef}
        theme='snow'
        placeholder='플레이스 홀더'
        value={props.descriptEdit}
        //바뀐값 데이터 보내주기
        // onChange={(e: any) => props.setDesciptEdit(e.target.value)}
        onChange={(content, delta, source, editor) => props.setDesciptEdit(editor.getHTML())}
        modules={modules}
        bounds={'#root'}
        formats={formats}
        style={{ height: '30rem', margin: '1%', marginBottom: '7rem' }}
      />
    </>
  );
};
