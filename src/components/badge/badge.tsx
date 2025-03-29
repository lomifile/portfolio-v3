export const SuccessBadge = () => {
  return (
    <div className="w-fit h-fit px-2.5 bg-success-bg text-[0.75em] text-success rounded-full flex items-center">
      Done
    </div>
  );
};

export const InfoBadge = () => {
  return (
    <div className="w-fit h-fit px-2.5 text-center bg-info-bg text-[0.75em] text-info rounded-full flex items-center">
      In progress
    </div>
  );
};

export const DangerBadge = () => {
  return (
    <div className="w-fit h-fit px-2.5 align-middle bg-danger-bg text-[0.75em] text-danger rounded-full flex items-center">
      Finished
    </div>
  );
};
