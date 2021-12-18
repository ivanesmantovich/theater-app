const SessionData = (session) => {
  return (
    <div>
      <div>{session.id}</div>
      <div>{session.message}</div>
    </div>
  );
};

export default SessionData;
