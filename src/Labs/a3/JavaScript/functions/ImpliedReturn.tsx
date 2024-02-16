function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return (
        <div>
          The result of 4 times 5 is: {fourTimesFive}
        </div>
      );
}

export default ImpliedReturn;