const PozdravImePrezime = () => {
  const imePrezime = prompt("Unesite svoje ime i prezime");
  const godine = prompt("Koliko imate godina?");
  const PozdravImePrezime = imePrezime ? 
    <div>
      <h1>Pozdrav</h1>
      <h2>korisnik</h2>
      <h3>{imePrezime} ima {godine} godina</h3>
    </div>
   : 
    <div>
      <h1>Sorry.</h1>
      <h2>Ne radimo s falsy vrijednostima.</h2>
    </div>
  

  return (
    <div>
      {PozdravImePrezime}
    </div>
  );
}

export { PozdravImePrezime };