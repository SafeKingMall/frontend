import React from 'react';
// import { useState } from 'react';
import ReactQuill from 'react-quill';
// import  { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// 이미지 크기 조절하는 것(오류가 나서 꺼놈, 모듈 설치해야함)
// import { ImageResize } from 'quill-image-resize-module-ts';
// import { useEffect } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import './editor.css';

// Quill.register('modules/imageResize', ImageResize);

export const EditorWr = (props: any) => {
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');
  //에디터

  const quillRef: any = React.useRef<ReactQuill>();

  const imageHandler = async () => {
    const input: any = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      const formData = new FormData();
      const file = input.files;
      const fileUrl: any = [...file];
      for (let i = 0; i < file.length; i++) {
        const nowUrl = URL.createObjectURL(file[i]);
        fileUrl.push(nowUrl);
      }
      for (let i = 0; i < file.length; i++) {
        formData.append('file', fileUrl[i]);
      }

      formData.append('type', props.type);
      formData.append('targetId', props.targetId);

      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/file/upload`,
        headers: {
          Authorization: jwt,
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      }).then((res) => {
        axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}/file/list/${props.type}/${props.targetId}`,
          headers: {
            Authorization: jwt,
            'Content-Type': 'multipart/form-data',
          },
        }).then((res) => {
          const IMG_URL = [];
          for (let i = 0; i < res.data.length; i++) {
            const URL =
              process.env.REACT_APP_BASE_URL + res.data[i].filePath + res.data[i].fileName;
            IMG_URL.push(URL);
          }
          const editor = quillRef.current.getEditor();
          const range = editor.getSelection();

          editor.insertEmbed(range.index, 'image', IMG_URL[res.data.length - 1]);
        });
      });
    });
  };

  const modules = React.useMemo(() => {
    return {
      toolbar: {
        container: [
          ['link', 'image', 'video'],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          [{ align: [] }, { color: [] }, { background: [] }],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'align',
    'color',
    'size',
    'background',
  ];
  return (
    <>
      <ReactQuill
        ref={(element: any) => {
          quillRef.current = element;
        }}
        theme='snow'
        placeholder='플레이스 홀더'
        value={props.descriptEdit || ''}
        onChange={(e: any) => props.setDescriptEdit(e)}
        modules={modules}
        formats={formats}
        style={{ margin: '1%' }}
      />
    </>
  );
};
