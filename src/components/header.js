import header from "../images/pattern-bg.png";

export default function Header() {
  return (
    <div
      className="row no-gutters"
      style={{
        backgroundImage: "url(" + header + ")",
        backgroundRepeat: "round",
      }}
    >
      <div className="row justify-content-center w-100 no-gutters">
        <h1 className="text-white py-5">IP Address Tracker</h1>
      </div>
      <div className="row w-100 justify-content-center pb-5 no-gutters">
        <div className="col-sm-2 col-lg-6">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search for an IP address or domain"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ fontSize: 2 + "rem", borderRadius: "1rem 0 0 1rem" }}
            />
            <div class="input-group-append">
              <span
                class="input-group-text bg-dark border border-dark"
                id="basic-addon2"
                style={{ fontSize: 2 + "em", borderRadius: "0 1rem 1rem 0" }}
              >
                <button type="button" class="btn btn-dark disabled">
                  >
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
