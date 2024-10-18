import { getUser } from "../../base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retornar un Object", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();

    expect(testUser).toEqual(user);
  });
});
