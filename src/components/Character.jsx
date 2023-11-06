export function Character(character) {
  return (
    <>
    <div className="card card-side bg-base-100 bg-accent shadow-xl">
      <figure>
        <img src={character.image} alt={character.name} className="" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{character.name}</h3>
        <p>{`Origin: ${character.origin && character.origin.name}`}</p>
        <div className="card-actions justify-end">
        <button
              className="btn btn-primary hover:underline"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              More
            </button>
        </div>
      </div>
    </div>
    <dialog id="my_modal_3" className="modal">
    <div className="modal-box">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 className="text-lg font-bold">{character.name}</h3>
      <p className="py-4">{character.status}</p>
      <p className="py-4">{character.species}</p>
      <p className="py-4">{character.gender}</p>
    </div>
  </dialog>
  </>
  );
}
export default Character;
