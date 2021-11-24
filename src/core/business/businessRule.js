export default class BusinessRule {
    //tüm yapı business rule'a çekilecektir.
  static Run(...logics) {
    for (const logic of logics) {
      if (!logic.success) {
        return logic;
      }
    }
    return null;
  }
}
