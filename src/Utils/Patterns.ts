class Patterns {
  public Email: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  public CPF: RegExp = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  public CEP: RegExp = /^\d{5}-\d{3}$/;
  public Date: RegExp = /^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  public DateTime: RegExp =
    /^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/\d{4} (0\d|1\d|2[0-3]):[0-5]\d$/;
}

export default new Patterns();
