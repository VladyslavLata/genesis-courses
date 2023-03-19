import { useStore } from 'Store/Store';
import { createPortal } from 'react-dom';
import { ButtonIcon } from 'components/ButtonIcon/ButtonIcon';
import { useVideoPlayer } from 'hooks/useVideoPlayer';
import { VscClose } from 'react-icons/vsc';
import throttle from 'lodash.throttle';
import styles from './Modal.module.scss';

const modalEl = document.getElementById('modal');

export const Modal = () => {
  const lesson = useStore(state => state.yourCurrentLesson);
  const closeModal = useStore(state => state.closeModal);
  console.log(lesson);
  const { saveCurrentTimeVideo } = useVideoPlayer(lesson, true);

  return createPortal(
    <div className={styles.modal}>
      <ButtonIcon
        onClick={() => {
          closeModal();
        }}
      >
        <VscClose />
      </ButtonIcon>

      <video
        // className={styles.video}
        id={lesson.id}
        controls
        width="100%"
        poster={`${lesson?.previewImageLink}/lesson-${lesson.order}.webp`}
        onTimeUpdate={throttle(e => saveCurrentTimeVideo(e), 1000)}
      ></video>
    </div>,
    modalEl
  );
};
