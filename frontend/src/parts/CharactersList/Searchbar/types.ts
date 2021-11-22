export interface ISearchbarProps {
  searchValue: string,
  handleSearchValue: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void
  handleSearchKey: () => void
}