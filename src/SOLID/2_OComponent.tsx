const ComponentWithEmoji = ({ emojiName }: { emojiName: string }) => {
  let emoji = '';

  switch (emojiName) {
    case 'good':
      emoji = '😀';
      break;
    case 'bad':
      emoji = '😥';
      break;
    case 'hourse':
      emoji = '🐴';
      break;
  }

  return (
    <div className='w-20 h-20 rounded bg-yellow-500 grid items-center p-4'>
      <span>{emoji}</span>
    </div>
  );
};

export const OComponent = () => {
  return (
    <div className='grid gap-10 grid-cols-3'>
      <ComponentWithEmoji emojiName='good' />
      <ComponentWithEmoji emojiName='hourse' />
      <ComponentWithEmoji emojiName='hourse' />
      <ComponentWithEmoji emojiName='bad' />
      <ComponentWithEmoji emojiName='bad' />
      <ComponentWithEmoji emojiName='good' />
      <ComponentWithEmoji emojiName='hourse' />
      <ComponentWithEmoji emojiName='bad' />
      <ComponentWithEmoji emojiName='good' />
    </div>
  );
};
