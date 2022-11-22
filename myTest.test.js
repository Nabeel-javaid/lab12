describe("Test the root path", () => {
  test("It should response the GET method", () => {
    const response = request(app)
      .post("http://localhost:8000/user/delete")
      .send({
        Name: "Nabeel javed",
        Email: "i202420@nu.edu.pk",
        Age: 22,
        Contact: 3435100977,
      });
    expect(response.statusCode), toBe(200);
  });
});
